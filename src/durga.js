import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const CustomLabel = ({ avatar, label }) => (
  <Box display="flex" alignItems="center">
    <Avatar src={avatar} alt={label} sx={{ width: 24, height: 24, marginRight: 1 }} />
    <Typography variant="body2">{label}</Typography>
  </Box>
);

export default function Durga() {
  return (
    <Box>
      <SimpleTreeView>
        <TreeItem itemId="grid" label={<CustomLabel avatar="https://example.com/avatar-grid.png" label="Data Grid" />}>
          <TreeItem itemId="grid-community" label={<CustomLabel avatar="https://example.com/avatar-grid-community.png" label="@mui/x-data-grid" />} />
          <TreeItem itemId="grid-pro" label={<CustomLabel avatar="https://example.com/avatar-grid-pro.png" label="@mui/x-data-grid-pro" />} />
          <TreeItem itemId="grid-premium" label={<CustomLabel avatar="https://example.com/avatar-grid-premium.png" label="@mui/x-data-grid-premium" />} />
        </TreeItem>
        <TreeItem itemId="pickers" label={<CustomLabel avatar="https://example.com/avatar-pickers.png" label="Date and Time Pickers" />}>
          <TreeItem itemId="pickers-community" label={<CustomLabel avatar="https://example.com/avatar-pickers-community.png" label="@mui/x-date-pickers" />} />
          <TreeItem itemId="pickers-pro" label={<CustomLabel avatar="https://example.com/avatar-pickers-pro.png" label="@mui/x-date-pickers-pro" />} />
        </TreeItem>
        <TreeItem itemId="charts" label={<CustomLabel avatar="https://example.com/avatar-charts.png" label="Charts" />} >
          <TreeItem itemId="charts-community" label={<CustomLabel avatar="https://example.com/avatar-charts-community.png" label="@mui/x-charts" />} />
        </TreeItem>
        <TreeItem itemId="tree-view" label={<CustomLabel avatar="https://example.com/avatar-tree-view.png" label="Tree View" />} >
          <TreeItem itemId="tree-view-community" label={<CustomLabel avatar="https://example.com/avatar-tree-view-community.png" label="@mui/x-tree-view" />} />
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
}