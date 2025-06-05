// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {
  WagmiConfig,
  createConfig,
  http,
} from 'wagmi';

import { mainnet } from 'wagmi/chains';

const chains = [mainnet] as const;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const { connectors } = getDefaultWallets({
  appName: 'Wallet Directory',
  projectId: 'YOUR_PROJECT_ID',
});

const wagmiConfig = createConfig({
  connectors,
  chains,
  transports: {
    [mainnet.id]: http(),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
