import { render, screen } from '@testing-library/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

describe('MyComponent', () => {
  test('renders fetched data', async () => {
    const mockData = [
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
      { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
    ];

    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockData }));

    render(<MyComponent />);

    const name1 = await screen.findByText('Leanne Graham');
    const email1 = screen.getByText('Sincere@april.biz');
    const name2 = await screen.findByText('Ervin Howell');
    const email2 = screen.getByText('Shanna@melissa.tv');
    const name3 = await screen.findByText('Clementine Bauch');
    const email3 = screen.getByText('Nathan@yesenia.net');

    expect(name1).toBeInTheDocument();
    expect(email1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
    expect(email2).toBeInTheDocument();
    expect(name3).toBeInTheDocument();
    expect(email3).toBeInTheDocument();

    axios.get.mockRestore();
  });
});