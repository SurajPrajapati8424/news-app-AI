import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import useStyles from "./styles.js";

import "./style.css";

const hStyle = {color: 'white'};
const NewsCard = ( {article: {description, publishedAt, source, title, url, urlToImage }, i}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank" className="clickMe">
                <CardMedia className={classes.media} image={urlToImage || 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/DD_Logo.svg/316px-DD_Logo.svg.png'}/>
                
                <div className="clickMe-hover color">
                    <div className={classes.details}>
                        <Typography variant="body2" style={ hStyle} component="h2">{ (new Date(publishedAt)).toDateString() }</Typography>
                        <Typography variant="body2" style={ hStyle} component="h2">{ source.name }</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h6">{ title }</Typography>

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                </div>

            </CardActionArea>

            <CardActions className={classes.cardActions} className="buttons">
                <Button size="small" style={ hStyle} className="btn-hover color-1">Learn More...</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;