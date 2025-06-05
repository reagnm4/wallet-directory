// pages/directory.tsx
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchDirectoryData } from '@/lib/fetchDirectory';
import DirectoryCard from '@/components/DirectoryCard';

export default function DirectoryPage() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
    } else {
      fetchDirectoryData()
        .then(setMembers)
        .catch((err) => {
          console.error('Error fetching directory data:', err);
        });
    }
  }, [isConnected, router]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Group Member Directory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <DirectoryCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
}
