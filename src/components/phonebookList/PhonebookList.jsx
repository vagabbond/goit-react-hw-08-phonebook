import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { TextField, Button } from '@mui/material';

import { change } from 'redux/sliceFilter';
import {
  PhonebookListStyled,
  PhonebookListItem,
  PhonebookListWrap,
} from './PhonebookList.styled';

import { Title } from '../phonebook/Phonebook.styled';

const PhonebookList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return contacts.length > 0 ? (
    <PhonebookListWrap>
      <Title>Contacts</Title>
      <TextField
        id="standard-input"
        label="Search contacts"
        type="text"
        value={filter}
        onChange={e => {
          e.preventDefault();
          dispatch(change(e.target.value));
        }}
        variant="standard"
        sx={{
          width: '100%',
          marginBottom: '20px',
        }}
      />
      <PhonebookListStyled>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(el => {
            return (
              <PhonebookListItem key={el.id}>
                {el.name}: {el.number}
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(el.id));
                  }}
                  id={el.id}
                  sx={{
                    color: 'black',
                  }}
                >
                  Delete
                </Button>
              </PhonebookListItem>
            );
          })
        ) : (
          <Title>You don't have contact with this name</Title>
        )}
      </PhonebookListStyled>
    </PhonebookListWrap>
  ) : (
    <Title>You don't have any contacts </Title>
  );
};
export default PhonebookList;
