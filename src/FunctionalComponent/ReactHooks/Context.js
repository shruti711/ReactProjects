import { Component, createContext } from "react";


export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = createContext(themes.dark);

class Parent extends Component {
    render() {
        return (
            <ChildBUtton onClick={props.changeTheme}>
                Change Theme
            </ChildBUtton>
        )
    }
}

class ChildBUtton extends Component {
    render() {
        // this.props = props;
        // this.themes = themes;
        return (
            <button
                {...this.props}
                style={{ backgroundColor: this.themes.background }}
            />
        )
    }
}
ChildBUtton.contextType = ThemeContext;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }
    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <Page>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <Section>
                    <ThemedButton />
                </Section>
            </Page>
        );
    }
}