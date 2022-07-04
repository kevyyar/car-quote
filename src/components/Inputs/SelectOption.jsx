export const SelectOption = ({ id, name, children }) => {
    return (
        <option key={id || name} value={id || name}>
            {children}
        </option>
    );
};