import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { DragAndDropSidebar } from './DragAndDropSidebar'
import { SelectedSidebar } from './SelectedSidebar'

storiesOf('Sidebar', module)
  .add('Drag and Drop', DragAndDropSidebar)
  .add('Selected Sidebar', () => <SelectedSidebar />)
