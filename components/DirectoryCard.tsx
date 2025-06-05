// components/DirectoryCard.tsx
type Member = {
  name: string;
  city: string;
  occupation: string;
  x_account: string;
  linkedin_url: string;
};

export default function DirectoryCard({ member }: { member: Member }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
      <p className="text-gray-600">{member.city} — {member.occupation}</p>
      <p className="mt-2">
        <a
          href={`https://x.com/${member.x_account.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          @{member.x_account}
        </a>
      </p>
      <p>
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
