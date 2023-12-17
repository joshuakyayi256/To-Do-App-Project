import {MdDeleteForever, MdCheck, MdCancel} from 'react-icons/md';

export const Item = ({title}) => {
    return (
        <div>
            <div className='text-[#494c6b] px-5 h-14 flex mx-5 justify-between items-center'></div>
            <div className='flex items-center'>
                <MdCancel className='h-4 w-4 mr-3 text-[#3a7cfd]' />
                <p className='text-sm lg:text-lg'>{title}</p>
            </div>
              <MdDeleteForever className='h-5 w-5 text-red-500' />
        </div>
    )
}