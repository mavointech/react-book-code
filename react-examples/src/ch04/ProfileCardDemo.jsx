import ProfileCard from './ProfileCard.jsx';

export default function ProfileCardDemo() {
  return (
    <div className="grid">
      <ProfileCard
        name="Aino Virtanen"
        jobTitle="Developer"
        company="Mavointech"
        years={8}
      />
      <ProfileCard name="Matti Korhonen" jobTitle="Designer" years={2} />
      <ProfileCard name="Liisa Nieminen" jobTitle="Tester" company="NordTech" />
    </div>
  );
}
