import React, {useCallback, useState} from 'react';
import block from 'bem-cn';
import {Dialog, DialogTitle, DialogContent, IconButton, makeStyles, Divider} from '@material-ui/core'
import Close from '@material-ui/icons/Close';
import './style.css';

const b = block('modal');

interface Props {
    title: string;
    open: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    onClose: (event?: any) => void;
}

const ModalComponent: React.FC<React.PropsWithChildren<Props>> = ({
                                                                      children,
                                                                      title,
                                                                      open,
                                                                      maxWidth = 'sm',
                                                                      onClose,
                                                                  }) => {
    const [hoverTitle, setHoverTitle] = useState<string>(title);
  /*  const refHeader = useCallback(
        (node) => {
            const showHoverTitle = node && node.offsetHeight < node.scrollHeight;
            setHoverTitle(showHoverTitle ? title : '');
        },
        [title, setHoverTitle]
    );*/

    const useStyle = makeStyles({
        root: {
            '& > .MuiBackdrop-root': {
                backgroundColor: 'rgb(255, 255, 255, .5)',
            }
        },
        container: {
            backdropFilter: 'blur(8px)',
        },
        paper: {
            backgroundColor: '#fff',
            color: '#000',
        },
    });

    const classes = useStyle();

    return (
       /* <Dialog maxWidth={maxWidth} fullWidth open={open} onClose={onClose} classes={classes}>
            <DialogTitle>
                <div className={b('title')}>
                    <h3 className={b('title-text').mix('h2')} {/!*ref={refHeader}*!/} title={hoverTitle}>
                        {title}
                    </h3>
                    <IconButton className={b('btn-close').toString()} onClick={onClose}>
                        <Close/>
                    </IconButton>
                </div>
            </DialogTitle>
            <Divider/>
            <DialogContent>{children}</DialogContent>
        </Dialog>*/
        <></>
    );
};

export default ModalComponent;
