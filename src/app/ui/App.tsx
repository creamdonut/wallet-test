import './App.css';
import { useApp } from '../model';

import { Wallet } from '@/features/Wallet';
import { Skeleton } from '@/shared/Skeleton';
import { MOCK_TOKENS } from '@/shared/mocks/mocks';

export function App() {
  const { isLoading, tokens, activities, wallet } = useApp();

  if (isLoading) {
    return <Skeleton tokenNumber={MOCK_TOKENS.length} />;
  }

  return (
    <Wallet
      balance={wallet.balance}
      walletAddress={wallet.address}
      tokens={tokens}
      activities={activities}
    />
  );
}
