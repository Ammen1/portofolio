import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className=" bg-gray-50 text-gray-700 dark:text-gray-200 dark:bg-[#06223F] min-h-screen">
        {children}
      </div>
    </div>
  );
}
