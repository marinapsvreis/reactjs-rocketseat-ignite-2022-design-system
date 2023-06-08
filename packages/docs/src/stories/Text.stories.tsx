import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minima, aperiam dignissimos perferendis dolores iure vel beatae ullam. Nam vel atque nulla ipsa, debitis eos repudiandae mollitia inventore autem? Enim.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
