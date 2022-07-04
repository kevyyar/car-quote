export const RadioInput = ({ children, className, name, value }) => {
    return (
        <>
            <label className="flex items-center">{children}</label>
            <input type="radio" name={name} value={name || value} />
        </>
    )
}