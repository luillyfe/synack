import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexGrow: 1
    },
    gridTileContent: {
        margin: '1em'
    }
}));

export function Results({ data: { google = [], bing = [] } }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={12}>
                {google.map(({cols, snippet, link, title}, index) => (
                    <GridListTile key={index} cols={cols || 6}>
                        <div className={classes.gridTileContent}>
                            {snippet}
                        </div>
                        <GridListTileBar
                            title={<a href={link}>{title}</a>}
                            subtitle={<span>by Google</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
