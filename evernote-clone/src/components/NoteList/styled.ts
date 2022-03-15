import styled from 'styled-components'

export const ScNoteList = styled.div`
  width: 300px;
  height: 100%;
  padding-top: 20px;


  .title {
    text-align: center;
    size: 14px;
  }
  .note-list-header {
    display: flex;
    span {
      padding-left: 20px;
    }
  }
  .filters{
    padding-left: 100px;
  }
`
export const ScOneNote = styled.div`
  padding-left: 30px;
  
  border-bottom: 1px solid #a4b5c4;
  .note-text {
    height: 20px;
  }
  .tags {
    padding: 5px 0px 0px;
    button {
      margin-left: 5px;
    }
  }
  .one-note-footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 10px;
  }
`
