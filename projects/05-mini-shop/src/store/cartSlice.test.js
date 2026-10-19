import reducer, {
  addToCart,
  removeFromCart,
  selectCartCount,
  selectCartTotal,
  setQuantity,
} from './cartSlice.js';

const mouse = { id: 1, name: 'Mouse', price: 10 };
const lamp = { id: 2, name: 'Lamp', price: 5.5 };

const stateWith = (items) => ({ cart: { items } });

describe('cartSlice', () => {
  it('adds a new product with quantity 1', () => {
    const state = reducer(undefined, addToCart(mouse));
    expect(state.items).toEqual([{ ...mouse, quantity: 1 }]);
  });

  it('increases quantity when the same product is added again', () => {
    let state = reducer(undefined, addToCart(mouse));
    state = reducer(state, addToCart(mouse));
    expect(state.items[0].quantity).toBe(2);
  });

  it('removes a product when quantity drops to zero', () => {
    let state = reducer(undefined, addToCart(mouse));
    state = reducer(state, setQuantity({ id: 1, quantity: 0 }));
    expect(state.items).toHaveLength(0);
  });

  it('removes a product by id', () => {
    let state = reducer(undefined, addToCart(mouse));
    state = reducer(state, addToCart(lamp));
    state = reducer(state, removeFromCart(1));
    expect(state.items.map((i) => i.id)).toEqual([2]);
  });

  it('calculates count and total with selectors', () => {
    const state = stateWith([
      { ...mouse, quantity: 2 },
      { ...lamp, quantity: 1 },
    ]);
    expect(selectCartCount(state)).toBe(3);
    expect(selectCartTotal(state)).toBeCloseTo(25.5);
  });
});
