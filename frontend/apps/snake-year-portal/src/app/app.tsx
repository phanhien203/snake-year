import { SnakeShared } from '@frontend/snake-shared';
import { useGetInventory } from '../queries/petstore';

export function App() {
  const { data, isLoading, error } = useGetInventory();

  const renderTestData = () => {
    if (isLoading) {
      return <span>Waiting ...</span>;
    }

    if (!data || error) {
      return <p>Empty data</p>;
    }

    return (
      <ul>
        {Object.entries(data || {}).map((key, value) => (
          <li>
            {key}: {value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <SnakeShared />
      {renderTestData()}
    </div>
  );
}

export default App;
