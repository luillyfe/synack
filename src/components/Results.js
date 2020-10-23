import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {NoResults} from "./NoResults";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexBasis: '50%',
    },
    gridTileContent: {
        margin: '1em'
    }
}));

export function Results({data: {google = [], bing = []}}) {
    const classes = useStyles();

    // TODO: Handle when engines return irregular numbers of results
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={1}>
                {google.length ? google.map(({cols, snippet, link, title}, index) => (
                    <GridListTile key={index} cols={cols || 1}>
                        <div className={classes.gridTileContent}>
                            {snippet}
                        </div>
                        <GridListTileBar
                            title={<a href={link}>{title}</a>}
                            subtitle={<span>by Google</span>}
                        />
                    </GridListTile>
                )) : <NoResults message="There is no results for Google" />}
            </GridList>
            <GridList cellHeight={160} className={classes.gridList} cols={1}>
                {bing.length ? bing.map(({cols, snippet, url: link, name: title}, index) => (
                    <GridListTile key={index} cols={cols || 1}>
                        <div className={classes.gridTileContent}>
                            {snippet}
                        </div>
                        <GridListTileBar
                            title={<a href={link}>{title}</a>}
                            subtitle={<span>by Bing</span>}
                        />
                    </GridListTile>
                )) : <NoResults message="There is no results for Bing" />}
            </GridList>
        </div>
    );
}
