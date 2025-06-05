// pages/index.tsx
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/directory');
    }
  }, [isConnected, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl mb-4">Connect Wallet to Access Directory</h1>
      <ConnectButton />
    </div>
  );
}
