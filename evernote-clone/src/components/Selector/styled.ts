import styled from 'styled-components'

const ScSelector = styled.div`
  padding-top: 20px;

  .select-head {
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 50px;
    height: 46px;
    font-size: 14px;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
    height: 30px;
    width: 200px;
  }

  .select-head {
    background-color: #00a82d;
  }

  .select-list {
    button {
      margin-top: 10px;
      color: #222;
      background-color: #f7c86a;
      :active {
        background-color: #ffb443;
      }
    }
  }
`

export default ScSelector