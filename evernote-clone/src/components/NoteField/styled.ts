import styled from 'styled-components'

const ScNoteField = styled.div`
  padding: 20px;
  height: 100%;
  background-color: white;

  width: 100%;

  .note-space {
    height: 80%;
    display: flex;
    flex-direction: column;
    input {
      border: none;
      height: 40px;
      outline:none;
    }
  }
  .panel {

  }
  .header {
    display: grid;
    grid-template-columns: 10% auto 10%;
  }
  .horizontal-line {
    border-top: 3px solid #a3b4c40f;
    width: 100%;
    position: fixed;
    margin-left: -20px;
  }
`

export default ScNoteField