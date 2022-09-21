import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import IconButton from '../../../components/IconButton/IconButton';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../../components/SecondaryButton/SecondaryButton';
export default function NavMenu() {
  return (
    <div className="menu-div hidden  px-3 lg:flex w-8/12 justify-end items-center">
        <SecondaryButton Icon={AiOutlineCloudUpload} text={'Upload'} />
        <PrimaryButton text={'Sign Up'} />
        <IconButton Icon={BiDotsVerticalRounded} />
    </div>
  )
}   
