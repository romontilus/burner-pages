import React, { Fragment, Component } from "react";
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Autocomplete, Input, Row, Button, Col } from "react-materialize";
import { SketchPicker, SliderPicker, CirclePicker } from "react-color";
import SearchResultContainer from "./SearchResultContainer";
import axios from "axios";
import Select from "@material-ui/core/Select";

class TextMenu extends Component {
  state = {
    currentComponentStatus: null,
    selectedFile: null,
    downloadURL: ""
  };

  componentDidMount = () => {
    this.setState({
      currentComponentStatus: this.props.currentComponentStatus
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      currentComponentStatus: nextProps.currentComponentStatus
    });
  };

  // fileUploadHandler = () => {
  //   const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dtergnssx/upload";
  //   const CLOUDINARY_UPLOAD_PRESET = "xxsgqoid";

  //   const fd = new FormData();
  //   fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
  //   fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  //   // const config = {
  //   //   headers: { 'X-Requested-With': 'XMLHttpRequest' }
  //   // };

  //   axios
  //     .post(CLOUDINARY_URL, fd)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data.secure_url);
  //       this.setState({
  //         downloadURL: res.data.secure_url
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // fileSelectedHandler = event => {
  //   // console.log(event.target.files[0]);
  //   this.setState(
  //     {
  //       selectedFile: event.target.files[0]
  //     },
  //     function() {
  //       console.log(this.state.selectedFile);
  //     }
  //   );
  // };

  render() {
    let colorSelect = () => (
      <Col s={12}>
        <SliderPicker
          // disableAlpha={true}
          width="auto"
          color={this.props.selectColor}
          onChangeComplete={this.props.handleChangeComplete}
        />
        <br />
        <CirclePicker
          width="auto"
          color={this.props.selectColor}
          onChangeComplete={this.props.handleChangeComplete}
          colors={[
            "#FFFFFF",
            "#E0E0E0",
            "#C0C0C0",
            "#A0A0A0",
            "#808080",
            "#606060",
            "#404040",
            "#202020",
            "#000000"
          ]}
        />
      </Col>
    );

    let textInput = () => (
      <Input
        s={12}
        type="textarea"
        label="Type text here"
        onChange={this.props.changeContent}
        value={this.props.selectContent}
      />
    );
    let fontSizeSelect = () => (
      <Input
        s={12}
        type="number"
        label="Font size"
        onChange={this.props.changeStyleS}
        value={this.props.selectSize}
      />
    );
    let widthSelect = () => (
      <Col s={12}>
        <Select
          style={{
            width: "100%"
          }}
          type="select"
          label="Component width"
          onChange={this.props.changeWidth}
          value={this.props.selectWidth}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </Select>
      </Col>
    );
    let imageSelect = () => (
      <Fragment>
        <Row>
          <Input
            s={12}
            type="file"
            label="Choose your image"
            // onChange={this.fileSelectedHandler}
            onChange={this.props.fileSelectedHandler}
            // value={this.props.selectURL}
          />
        </Row>
        <Row>
          {/* <Button onClick={this.fileUploadHandler}>Upload your image</Button> */}
          <Button onClick={this.props.fileUploadHandler}>
            Upload your image
          </Button>
        </Row>
      </Fragment>
    );
    let imageURL = () => (
      <Input
        s={12}
        type="textarea"
        label="Paste Image URL"
        onChange={this.props.changeURL}
        value={this.props.selectURL}
      />
    );
    let fontSelect = () => (
      <Col s={12}>
        <Select
          style={{
            width: "100%"
          }}
          type="select"
          label="Component width"
          onChange={this.props.changeFont}
          value={this.props.selectFont}
        >
          <option style={{ fontFamily: "helvetica" }} value={"helvetica"}>
            Helvetica
          </option>
          <option style={{ fontFamily: "times" }} value={"times"}>
            Times
          </option>
          <option style={{ fontFamily: "arial" }} value={"arial"}>
            Arial
          </option>
          <option style={{ fontFamily: "courier" }} value={"courier"}>
            Courier
          </option>
          <option style={{ fontFamily: "verdana" }} value={"verdana"}>
            Verdana
          </option>
        </Select>
      </Col>
      // <Input
      //   type="select"
      //   label="Choose your font"
      //   s={12}
      //   onChange={this.props.changeFont}
      //   value={this.props.selectFont}
      // >
      //   <option value={"helvetica"}>Helvetica</option>
      //   <option value={"times"}>Times</option>
      //   <option value={"arial"}>Arial</option>
      //   <option value={"courier"}>Courier</option>
      //   <option value={"verdana"}>Verdana</option>
      // </Input>
      // <div>
      //   <span>hello</span>
      //   <select>
      //     <option value="grapefruit">Grapefruit</option>
      //     <option value="lime">Lime</option>
      //     <option selected value="coconut">
      //       Coconut
      //     </option>
      //     <option value="mango">Mango</option>
      //   </select>
      //   <select value={"a"}>
      //     <option value="A">Apple</option>
      //     <option value="B">Banana</option>
      //     <option value="C">Cranberry</option>
      //   </select>
      //   <span>world</span>
      // </div>
      // <Autocomplete
      //   title="Choose your font"
      //   data={{
      //     Helvetica: null,
      //     Times: null,
      //     Arial: null
      //   }}
      // />
    );
    let thicknessSelect = () => (
      <Input
        s={12}
        type="number"
        label="Divider thickness"
        onChange={this.props.setThickness}
        value={this.props.selectThickness}
      />
    );
    let currentComponentStatus = this.state.currentComponentStatus;
    let editOptions = "";
    if (currentComponentStatus === "divider") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {thicknessSelect()}
        </Fragment>
      );
    }
    if (currentComponentStatus === "heading") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {fontSelect()}
          {textInput()}
          {fontSizeSelect()}
        </Fragment>
      );
    }

    if (currentComponentStatus === "textbox") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {fontSelect()}
          {textInput()}
          {fontSizeSelect()}
          {widthSelect()}
          {/* {fontSelect()} */}
        </Fragment>
      );
    }

    if (currentComponentStatus === "image") {
      editOptions = (
        <Fragment>
          <br />
          {imageSelect()}
          {imageURL()}
          {widthSelect()}
        </Fragment>
      );
    }
    return <Fragment>{editOptions}</Fragment>;
  }
}

export default TextMenu;