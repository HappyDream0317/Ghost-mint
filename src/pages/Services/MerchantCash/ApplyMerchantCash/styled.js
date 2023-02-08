import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`
export const TopContent = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:70px;
  padding-left:15px;
  padding-right:15px;
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    a{
      color:#e91818!important;
      cursor:pointer;
      text-decoration:underline!important;
    }
    a:hover{
      color:#3a3a3a!important;
    }
  }
  .header{
    margin-top:50px;
  }
  .content{
    margin-top:20px;
  }
`

export const BottomContent = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:50px;
  margin-bottom:70px;
  .row{
    margin-top:50px;
    .col-lg-4{
      img{
        width:42px;
        margin:auto;
      }
      div{
        margin-top:10px;
      }
      p{
        color:#3a3a3a;
        font-family:Muli, sans-serif;
        font-size:16px;
        line-height:24.4286px;
        text-align:center;
      }
    }
  }
`

export  const endContent = styled.div `
  background-image: url(${Images.ApplyMerchantCash2});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  div{
    div{
      justify-content: center;
      margin: 70px auto 0px auto;
      max-width:1120px;
      margin:auto;
      text-align:center;
      .left{
        padding:0;
        display:block;
        text-align:left;
        img{
          width:175px;
        }
        span{
          text-align:left;
          color:#ffffff;
          font-family:Montserrat, sans-serif;
          font-size:45px;
          line-height:58.5px;
          font-weight:900;
        }
      }
      .right{
        display:block
      }
      @media screen and (max-width: 992px) {
            grid-gap: 15px;       
        }
      @media screen and (max-width: 880px) {
          display:block;
          margin:0 20px;
      }
    }
  }
`