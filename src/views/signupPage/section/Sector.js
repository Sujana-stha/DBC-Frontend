import React,{ useState }  from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ImagePicker from 'components/ImagePicker/ImagePicker';
import 'assets/css/image-picker.css';
import Button from "@material-ui/core/Button"
// import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

import styles from "assets/jss/material-kit-react/views/signupFormStyle";

//images
import Art from 'assets/img/interest/art.png';
import Beuty from 'assets/img/interest/beuty.png';
import Books from 'assets/img/interest/books.png';
import Business from 'assets/img/interest/business.png';
import Fitness from 'assets/img/interest/fitness.png';
import Food from 'assets/img/interest/food.png';
import Humour from 'assets/img/interest/humour.png';
import Music from 'assets/img/interest/music.png';
import Movies from 'assets/img/interest/movies.png';
import Podcast from 'assets/img/interest/podcast.png';
import Tech from 'assets/img/interest/tech.png';
import Writing from 'assets/img/interest/writing.png';
// import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

const imageLists = [
    {name: Art, label: "Arts"},
    {name: Beuty, label: "Beuty"},
    {name: Books, label: "Books"},
    {name: Business, label: "Business"},
    {name: Fitness, label: "Fitness"},
    {name: Food, label: "Food"},
    {name: Humour, label: "Humour"},
    {name: Music, label: "Music"},
    {name: Movies, label: "Movies"},
    {name: Podcast, label: "Podcasts"},
    {name: Writing, label: "Writing"},
    {name: Tech, label: "Technology"},
]
export default function Cards( { handleNext, handleBack, handleChange, values: { interest } }) {
    const classes = useStyles();

    const [max_images, setMaxImages]= useState([]);
    // const [images, setImages] = useState({});
    const [max_message, setMaxMessage] = useState({});
    const [interests, setInterest] = useState('');
    
    
    function  onPickImagesWithLimit(max_images, e) {
        console.log('pick', max_images)
        console.log('va', handleChange)
        
        
        setInterest(max_images.value)
        setMaxImages(max_images)
        const list = {
            name: 'interest',
            value: max_images.value
        }
        console.log(list)
        // handleChange(list)
    }
    
    function onPickMaxImages(last_image) {
        let image = JSON.stringify(last_image)
        let max_message = `Max images reached. ${image}`
    
        setMaxMessage(max_message)
    }
    
    return (

        <Card className={classes.cardContainer}>
            <CardHeader color="warning" > Interested Sector </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle} > What is your Interested Sector ? </h4> 
                <small> Choose any three from the given options. </small> 
                <div className={classes.sectorContainer}>
                    {/* <div className={classes.sectorLists} >
                        <img src={Art}/> 
                        <p className={classes.sectorName} > Arts </p>
                    </div> */}
                    <ImagePicker 
                        images = {imageLists.map((image, i)=> ({
                            src: image.name, 
                            value: i+1,
                            label: image.label
                        }))}
                        onPick={onPickImagesWithLimit.bind(this)}
                        maxPicks={3}
                        onMaxPicks={onPickMaxImages.bind(this)}
                        multiple
                    />
                    <input value={interest} onChange={handleChange} name="interest" value={max_images}/>
                    {/* <textarea rows="4" cols="100" value={max_images && JSON.stringify(max_images)} disabled/>
                    <textarea rows="4" cols="100" value={max_message && JSON.stringify(max_message)} disabled/> */}
                    {/* <TextField onChange={handleChange} name={interest} value={max_images} required/> */}
                </div>
                <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
             <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained"  color="primary" onClick={handleNext }>
          Next
        </Button>
      </div>
            { /* <Button color="primary">Do something</Button> */} 
            </CardBody> 
        </Card >
    );
}