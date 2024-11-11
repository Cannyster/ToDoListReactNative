import styled from 'styled-components';

.text1 {
  color: var(--blue);
}

.text2 {
  color: var(--purple);
}

.taskCounter {
  display: inline-flex;
  gap: 10px;
}

.taskManagerHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.taskManagerBody {
  width: 750px;
  min-height: 450px;
}

.janela {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  min-height: 60px;
  margin-top: -2rem;
  margin-bottom: 2rem;
  border: 0;
}

.createButton {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-style: bold;
  background: var(--blue-dark);
  color: var(--white);
  width: 90px;
  height: 50px;
  border-radius: 8px;
  margin: 0;
  border: 0;
  padding: 10px;
  cursor: pointer;
}

textarea {
  padding: 0.5rem;
  color: var(--white);
  border-radius: 8px;
  min-height: 50px;
  width: 630px;
  background: var(--gray-500);
  border: 0;
  resize: none;
}

form {
  display: flex;
}

strong {
  font-size: 1rem;
}

span {
  color: var(--white);
  font-size: 1rem;
}
