import React, {useState} from "react";
import Input from "./Input";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import SpecialInput from "./SpecialInput";
import {Button, Box, Grid} from "@mui/material";
import SizeSlider from "./SizeSlider";

export default function Form (){
    const dispatch = useDispatch();
    const state = useSelector(state => state.data);    
    const [image, setImage] = useState("primary_rgb.png");
    const [name, setName] = useState("");
    const [credentials, setCredentials] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [title, setTitle] = useState("");
    const [college, setCollege] = useState("");
    const [department, setDepartment] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [button, setButton] = useState("Build");
    const [color, setColor] = useState("#005A8B");
    const [nameSize, setNameSize] = useState(18);
    const [detailSize, setDetailSize] = useState(11);
    const [imageSize, setImageSize] = useState(110);
    const [lineHeight, setLineHeight] = useState(1.15)
    
    function updateLogs(log){
        // props.addLog(log);
        addLogs(log)
    };

    const addLogs = ()=>{
        dispatch({
            type: "CREATE_DATA", 
            payload: {
                image:image, 
                name:name, 
                credentials:credentials, 
                pronouns:pronouns, 
                title:title, 
                college:college,
                department:department, 
                address: address, 
                location:location, 
                phone:phone, 
                email:email, 
                color:color,
                nameSize:nameSize, 
                detailSize:detailSize,
                imageSize:imageSize, 
                lineHeight:lineHeight 
            }
        });
    };

    function handleImage(selection){
        setImage(selection);
    };

    function handleColor(selection){
        setColor(selection);
    };

    function handleNameSize(selection){
        setNameSize(selection);
    };

    function handleDetailSize(selection){
        setDetailSize(selection);
    };

    function handleImageSize(selection){
        setImageSize(selection);
    };

    function handleLineHeight(selection){
        setLineHeight(selection);
    };
    // function handleMouse(){
    //     updateLogs();
    // };

    function handleKeypress(){
        updateLogs();
        setButton("Syncing");
        setTimeout(()=>{
            button!=="Syncing" && setButton("Update");
        }, 1000);
    };

    function handleSubmit(){
        setButton("Built!");
        updateLogs();
        setTimeout(()=>{
            setButton("Build");
        }, 1200);
    };

    function handlePrefill(){
        setImage("primary_rgb.png");
        setCollege("Berea College");
        setLocation("Berea, KY");
        updateLogs();
    };
    
    return (
    <Box onKeyPress={handleKeypress} /* onMouseMove={handleMouse}*/>
        <Grid className="form" container columnSpacing={1} rowSpacing={1}>
            <Input label="name" onUpdate={setName} example="e.g. Zachary Neill" />
            <Input label="credentials" onUpdate={setCredentials} example="e.g. Ph.D" />
            <Input label="title" onUpdate={setTitle} example="e.g. Director" />
            <Input label="pronouns" onUpdate={setPronouns} example="e.g. He/him" />
            <Input label="college" value={college} onUpdate={setCollege} example="e.g. Berea College" />
            <Input label="department" onUpdate={setDepartment} example="e.g. Department of Computer Science" />
            <Input label="address" onUpdate={setAddress} example="e.g. 101 Chestnut St. or Edwards Building" />
            <Input label="location" value={location} onUpdate={setLocation} example="e.g. Berea, KY or Room 101" />
            <Input label="phone" onUpdate={setPhone} example="e.g. 859-985-3369" />
            <Input label="email" onUpdate={setEmail} example="e.g. neillz@berea.edu" />
        </Grid>
        <Grid className="form" container columnSpacing={2} rowSpacing={2}>
            <SpecialInput label="image" value={image} onUpdate={event => handleImage(event)} />
            <SpecialInput label="color" value={color} onUpdate={event => handleColor(event)} />
            <SizeSlider label="name" value={nameSize} onSlide={handleKeypress} 
                onUpdate={event => handleNameSize(event)} onReset={event=> handleNameSize(18)} />
            <SizeSlider label="detail" value={detailSize} onSlide={handleKeypress} 
                onUpdate={event => handleDetailSize(event)} onReset={event=> handleDetailSize(11)} />
            <SizeSlider label="image" value={imageSize} onSlide={handleKeypress} 
                onUpdate={event => handleImageSize(event)} onReset={event=> handleImageSize(110)} />
            <SizeSlider label="line" value={lineHeight} onSlide={handleKeypress} 
                onUpdate={event => handleLineHeight(event)} onReset={event=> handleLineHeight(1.15)} />
            
            <Grid item>
                <Button size="large" color="inherit" variant="contained" onClick={handlePrefill}>Autofill with Berea Values</Button>
            </Grid>
            <Grid item>
                <Button size="large" variant="contained" style={{backgroundColor:"#005A8B", color:"white"}} onClick={handleSubmit}>{button}</Button>
            </Grid>
        </Grid>
    </Box>
    )
};