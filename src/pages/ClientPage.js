import { Client } from '../components/client/Client'
import { ClientPlayList } from '../components/client/ClientPlayList';

export const ClientPage = () => {
  return (
    <>
      <Client />
      <h1>-----------------</h1>
      <ClientPlayList />
    </>
  );
};
