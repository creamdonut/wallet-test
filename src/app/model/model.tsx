import { useState, useEffect } from 'react';

import { Activity } from '@/entities/activities';
import { Token } from '@/entities/token';
import { WalletData } from '@/entities/wallet';
import {
  MOCK_TOKENS,
  MOCK_ACTIVITIES,
  MOCK_WALLET,
} from '@/shared/mocks/mocks';

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [wallet, setWallet] = useState<WalletData>({
    balance: 0,
    address: '',
  });

  useEffect(() => {
    const getTokensResponse = new Promise<Token[]>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_TOKENS);
      }, 1000);
    });

    const getActivitiesResponse = new Promise<Activity[]>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_ACTIVITIES);
      }, 1400);
    });

    const getWalletResponse = new Promise<WalletData>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_WALLET);
      }, 2000);
    });

    setIsLoading(true);

    Promise.all([
      getTokensResponse,
      getActivitiesResponse,
      getWalletResponse,
    ]).then(([tokens, activities, wallet]) => {
      setTokens(tokens);
      setActivities(activities);
      setWallet(wallet);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    tokens,
    activities,
    wallet,
  };
};
