import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
    const [value1, setValue1] = React.useState(3); // Example initial rating
    const [value2, setValue2] = React.useState(4); // Example initial rating
    const [value3, setValue3] = React.useState(2); // Example initial rating
  
    return (
        
      <Stack direction="column" spacing={4} alignItems="left">
        <h4>Customer Feedback</h4>
        <Stack direction="row" alignItems="left" spacing={1}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="body1">Remy Sharp</Typography><div></div>
          <Rating
            name="rating-1"
            value={value1}
            onChange={(event, newValue) => setValue1(newValue)}
          />
        </Stack>
        <Stack direction="row" alignItems="left" spacing={1}>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Typography variant="body2">Travis Howard</Typography>
          <Rating
            name="rating-2"
            value={value2}
            onChange={(event, newValue) => setValue2(newValue)}
          />
        </Stack>
        <Stack direction="row" alignItems="left" spacing={1}>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Typography variant="body3">Cindy Baker</Typography>
          <Rating
            name="rating-3"
            value={value3}
            onChange={(event, newValue) => setValue3(newValue)}
          />
        </Stack>
      </Stack>
    );
  }