import * as React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DockIcon from '@mui/icons-material/Dock'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import  "./App.css"

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon >
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText className='font' primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DockIcon />
      </ListItemIcon>
      <ListItemText className='font' primary="Autodock" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DehazeIcon />
      </ListItemIcon>
      <ListItemText className='font' primary="Similarity" />
    </ListItemButton>
  </React.Fragment>
)
