import styled from 'styled-components'

const ScSearcher = styled.div`
  padding-top: 20px;
  input {
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxKhy3HtcmOJH2KTmlTcm6HyOAOIzOuzWQw&usqp=CAU');
    background-position-x: 5px;
    background-size:contain;
    background-repeat: no-repeat;
    text-indent: 35px;
    height: 28px;
    width: 195px;
    border: none;
    border-radius: 70px;
  }
  input:focus {
    background-image:none;
  }
`

export default ScSearcher