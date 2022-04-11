import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "@emotion/styled"
import ImageC from "../components/atom/ImageC";
import "src/global-style-CSS/index.scss"
import logo from "src/asset/image/logo-1.png"

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000a3;
  }

  .text {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;


    & > * {
      margin: 1em 0;
    }

    h1 {
      font-size: 3em;
    }

    p {
      font-weight: 900;
      font-size: 1.5em;
    }

    .image-in {
      width: 500px;
      height: 100px;
    }
  }
`


const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <Root>
            <div className="image">
                <ImageC imageName="oil-wallpaper"/>
            </div>
            <div className="overlay"/>
            <div className="text">
                <div className="image-in">
                    <ImageC imageName="logo-1"/>
                </div>
                <p>
                    Website Will be Coming Soon ... !!!
                </p>
            </div>
        </Root>
    </Layout>
)

export default IndexPage
