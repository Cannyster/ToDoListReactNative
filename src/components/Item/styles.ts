import styled from 'styled-components';

.taskBox {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: var(--gray-500);
  min-height: 4rem;
  padding: 0.7rem;
  margin-bottom: 0.75rem;
  border: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: var(--gray-400);
  gap: 10px;
}

.taskBox label input[type="checkbox"] {
  display: none;
}

.taskContent {
  text-wrap: wrap;
  font-size: 0.8rem;
  color: var(--white);
  height: 100%;
  width: 100%;
}

.checkbox {
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;

  transition: 0.2s all;

  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-unchecked {
  border: 2px solid var(--blue);
}

.checkbox-unchecked:hover {
  background-color: rgba(30, 111, 159, 0.2);
}

.checkbox-checked {
  border: 2px solid var(--purple-dark);
  background-color: var(--purple-dark);
}

.checkbox-checked:hover {
  border: 2px solid var(--purple);
  background-color: var(--purple);
}

.paragraph {
  font-size: 0.875rem;
  line-height: 140%;
  user-select: none;

  transition: 0.2s all;
}

.paragraph-checked {
  text-decoration: line-through;
  color: var(--gray-300);
}
