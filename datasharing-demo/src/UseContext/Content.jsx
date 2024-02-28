import { useTheme } from "./ThemeProvider";

export default function Content(){
    const{theme, toggleTheme} = useTheme();

    return(
        <>
        <div className={`App ${theme}`}>
            <b>current Theme {theme}</b>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
        </>
    )
}