import styled from 'styled-components'

export const Button = styled.button`
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

appearance: none;  
  border: none;
  background: url(https://andyhoffman.codes/random-assets/img/slots/repeat.png) transparent 0 0 no-repeat;
  background-size: cover;
  width: 48px;
  height: 48px;
  top: 10px;
  right: 20px; 
  cursor: pointer;
  -webkit-animation: rotating 6s linear infinite;
  -moz-animation: rotating 6s linear infinite;
  -ms-animation: rotating 6s linear infinite;
  -o-animation: rotating 6s linear infinite;
  animation: rotating 6s linear infinite;

  @media screen and (max-width: 1000px) {
    margin-left: -10em;
    }

`

