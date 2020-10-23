import React, {useState} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    toolbar: {backgroundColor: '#0c1f3b'},
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    engineSelector: {
        marginLeft: 'auto',
        background: 'white',
        borderRadius: '10px'
    }
}));

export function Search({submitQuery}) {
    const classes = useStyles();
    const [queryText, setQuery] = useState("")
    const engines = [
        { value: 'Both', label: 'Both' },
        { value: 'Google', label: 'Google' },
        { value: 'Bing', label: 'Bing' },
    ]
    const [selectedEngine, setEngine] = useState(engines[0].value)
    const wrapper = React.createRef();

    const handleChange = ev => {
        setQuery(ev.target.value)
    }

    const handleEngineChange = ev => {
        ev.stopPropagation()
        setEngine(ev.target.value)
    }

    const handleClick = ev => {
        ev.preventDefault()
        submitQuery(queryText, selectedEngine)
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Synack
                    </Typography>
                    <form className={classes.search} onSubmit={handleClick}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            value={queryText}
                            onChange={handleChange}
                        />
                    </form>
                    <TextField
                        id="engine-selector"
                        select
                        value={selectedEngine}
                        onChange={handleEngineChange}
                        className={classes.engineSelector}
                        inputProps={wrapper}
                    >
                        {engines.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button color="inherit" type="submit" onClick={handleClick}>Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
