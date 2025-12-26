import StoreProvider from './StoreProvider'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}

export default AppProviders
