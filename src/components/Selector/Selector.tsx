interface SelectorProps {
  items: string[]; // Define prop type
}

const Selector: React.FC<SelectorProps> = ({ items }) => {
  return (
    <div className="jp__selector">
      <form className="max-w-sm mx-auto">
        <select style={{cursor: "pointer"}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="" disabled selected>
            Choose an option
          </option>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Selector;
