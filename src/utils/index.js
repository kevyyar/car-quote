export const renderSelectOptions = (options) => {
  const brandOptions = options.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ));

  return brandOptions;
};
