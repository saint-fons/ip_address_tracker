import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  
  
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`



const btnDefault = css`
  @media (min-width: 1440px) {
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

export default styled.div`
  font-family: sans-serif;

  & > div {
    text-align: center;
  }

  @media (min-width: 1440px) {
  form {
    max-width: 800px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;

      & > label {
        width: 270px;
        font-weight: bold;
        font-size: 20px;
        line-height: 32px;
      }

      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 20px;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }

      & > input[type='checkbox'] {
        margin-top: 7px;
      }

      & > div {
        margin-left: 16px;

        & > label {
          display: block;

          & > input {
            margin-right: 3px;
          }
        }
      }

      & > span {
        line-height: 32px;
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
      }
    }

    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }

    button {
      margin: 0 10px;

      &[type='submit'] {
        ${btnPrimary};
      }

      &[type='button'] {
        ${btnDefault};
      }
    }
  }
    @media (max-width: 1440px) {
      form {
        max-width: 570px;
        margin: 10px auto;
        padding: 20px;
        border-radius: 3px;

        & > div {
          display: flex;
          flex-flow: row nowrap;
          line-height: 2em;
          margin: 5px;

          & > label {
            color: #333;
            width: 270px;
            font-weight: bold;
            font-size: 20px;
            line-height: 32px;
          }

          & > input,
          & > select,
          & > textarea {
            flex: 1;
            padding: 3px 5px;
            font-size: 20px;
            margin-left: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
          }

          & > input[type='checkbox'] {
            margin-top: 7px;
          }

          & > div {
            margin-left: 16px;

            & > label {
              display: block;

              & > input {
                margin-right: 3px;
              }
            }
          }

          & > span {
            line-height: 32px;
            margin-left: 10px;
            font-size: 20px;
            color: #800;
            font-weight: bold;
          }
        }

        & > .buttons {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          margin-top: 15px;
        }

        button {
          margin: 0 10px;

          &[type='submit'] {
            ${btnPrimary};
          }

          &[type='button'] {
            ${btnDefault};
          }
        }
      }
    
    
    }
  
    
`




