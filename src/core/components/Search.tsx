import React, { FC, useRef } from 'react';

import { Grid, GridItem } from 'src/core/styled/blocks';
import { Input, SearchButton } from 'src/core/styled/form';
import searchIcon from 'public/icons/search-icon.png';

type SubmitType = React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>;

interface IProps {
  force?: boolean;
  onSubmit: (value: string) => void;
}

export const Search: FC<IProps> = ({ force, onSubmit }) => {
  const searchNode = useRef<HTMLInputElement>();

  function handleChange(e: SubmitType, submit?: boolean) {
    e.preventDefault();

    if (force || submit) {
      onSubmit(searchNode.current.value);
    }
  }

  return (
    <form onSubmit={(e) => handleChange(e, true)}>
      <Grid width="100%" height="30px" padding="10px" gridTemplateColumns="90% 1fr">
        <GridItem>
          <Input type="text" ref={searchNode} onChange={handleChange} />
        </GridItem>
        <GridItem>
          <SearchButton type="submit">
            <img src={searchIcon} alt="search" width="30px" height="30px" color="red" />
          </SearchButton>
        </GridItem>
      </Grid>
    </form>
  );
};
