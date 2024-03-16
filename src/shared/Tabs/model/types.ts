export interface TabPaneProps {
  title: string;
  children: React.ReactNode;
}

export interface TabProps {
  children:
    | React.ReactElement<TabPaneProps>[]
    | React.ReactElement<TabPaneProps>;
}
