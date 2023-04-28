## useContext

类似于vue 中的Provider

```jsx
const ThemeContext = createContext(null);

    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>

    const theme = useContext(ThemeContext);
```


