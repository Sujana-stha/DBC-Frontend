import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { singleUserInfo } from 'auth/apiRoutes';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import profile from "assets/img/faces/christian.jpg";

// components
import Connections from './ConnectionsStats'

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage() {
	let {id} = useParams();
	const classes = useStyles();

	const [userDetails, setUserDetails] = useState([])
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);

	useEffect(()=> {
		singleUserInfo(id).then(response => {
			console.log(id);
			// setUserDetails(response.data);
			const details = [];
			details.push(response.data)
			setUserDetails(details);
		})
	}, [])
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			
			<Parallax
				small
				filter
				image={require("assets/img/profile-bg.jpg").default}
			/>
			<div className={classNames(classes.main, classes.mainRaised)}>
				{userDetails.map((user, index) => {
					return(
					<div key ={index} className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={6}>
							<div className={classes.profile}>
								<div>
									<img src={profile} alt="..." className={imageClasses} />
								</div>
								
								<div className={classes.name}>
									<h3 className={classes.title}>{user.first_name} {user.last_name}</h3>
									<div className={classes.userInfo}>
									<span><i className="far fa-user"></i> {user.username}</span> | <span>
										<i className="far fa-envelope"></i> {user.email}</span>
									</div>
									<Button justIcon link className={classes.margin5}>
										<i className={"fab fa-twitter"} />
									</Button>
									<Button justIcon link className={classes.margin5}>
										<i className={"fab fa-instagram"} />
									</Button>
									<Button justIcon link className={classes.margin5}>
										<i className={"fab fa-facebook"} />
									</Button>
								</div>
							</div>
						</GridItem>
					</GridContainer>
					<div className={classes.description}>
						<p>
							{user.PersonalInfo ? user.PersonalInfo.summary: '-'}
						</p>
					</div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
							<NavPills
								alignCenter
								color="primary"
								horizontal={{
									tabsGrid: { xs: 12, sm: 4, md: 4 },
									contentGrid: { xs: 12, sm: 8, md: 8 },
								  }}
								tabs={[
									{
										tabButton: "Interested Sector",
										tabIcon: Camera,
										tabContent: (
											<GridContainer justify="center">
												<GridItem xs={12} sm={12} md={12}>
													<Paper className= {classes.paperContainer}>
													<h5>I am interested in:</h5>
													{user.Interest.map((inter, index)=> {
														return (
															<Chip 
															className={classes.chipLabel} key= {index} 
															label ={inter.title} variant="outlined" 
															color= "primary"/>
														)
													})}
													</Paper>
												</GridItem>
												<GridItem xs={12} sm={12} md={12}>
												<Paper className= {classes.paperContainer}>
													<h5>My main goals are:</h5>
													{user.Objective.map((obj, index)=> {
														return (
															<Chip 
															className={classes.chipLabel} key= {index} 
															label ={obj.title} variant="outlined" 
															color= "primary"/>
														)
													})}
													</Paper>
												</GridItem>
											</GridContainer>
										),
									},
									{
										tabButton: "Business Information",
										tabIcon: Palette,
										tabContent: (
											<GridContainer justify="center">
												<GridItem xs={12} sm={12} md={12}>
													<Paper className={classes.paperContainer} >
														<div>
															<h6>Business Sector:</h6>
															
															<TextField
																defaultValue={user.BusinessInfo.business_sector}
																InputProps={{
																	readOnly: true,
																}}
																variant="outlined"
															/>
														</div>
														<div>
															<h6>Business Name:</h6>
															
															<TextField
																defaultValue={user.BusinessInfo.business_name}
																InputProps={{
																	readOnly: true,
																}}
																variant="outlined"
															/>
														</div>
														<div>
															<h6>Your Position:</h6>
															
															<TextField
																
																defaultValue={user.BusinessInfo.position}
																InputProps={{
																	readOnly: true,
																}}
																variant="outlined"
															/>
														</div>
													</Paper>	
												</GridItem>
										
											</GridContainer>
										),
									},
									{
										tabButton: "Connections",
										tabIcon: Favorite,
										tabContent: <Connections meetUsers = {user.MeetUsers}/>
									},
								]}
							/>
						</GridItem>
					</GridContainer>
				</div>
					)
				})}
					
			</div>
		</div>
	);
}
