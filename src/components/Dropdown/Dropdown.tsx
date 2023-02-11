import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import dropdownIconArrow from '@assets/img/dropdown-icon__arrow.svg';
import dropdownIconArrowDisable from '@assets/img/dropdown-icon__arrow-disable.svg';
import { DropdownItem } from './types';
import { useOutsideClick } from './useOutsideClick';

interface DropdownProps {
  name: string;
  itemList: DropdownItem[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onBlur: React.FocusEventHandler<HTMLButtonElement>;
}

export const Dropdown: React.FC<DropdownProps> = ({
  itemList,
  value,
  onChange,
  placeholder,
  onBlur,
  name,
}) => {
  const [isShowItemList, setIsShowItemList] = useState<boolean>(false);

  const [selectedItemId, setSelectedItemId] = useState<number>(0);

  const [isEnterOrTabKeyPressed, setIsEnterOrTabKeyPressed] =
    useState<boolean>(false);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isShowArrow = true;

  const dropdownMainBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isEnterOrTabKeyPressed) {
      const value = itemList[selectedItemId]?.value;
      if (value) {
        onChange(value);
      }
      setIsEnterOrTabKeyPressed(false);
    }
  }, [isEnterOrTabKeyPressed]);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setIsShowItemList(false));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === 'Escape') {
        setIsShowItemList(false);
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        setIsEnterOrTabKeyPressed(true);
        setIsShowItemList(false);
      }
      if (e.key === 'ArrowUp') {
        setSelectedItemId((prev) => {
          if (prev === 0) {
            return 0;
          }
          return prev - 1;
        });
      }
      if (e.key === 'ArrowDown') {
        setSelectedItemId((prev) => {
          if (prev === itemList.length - 1) {
            return prev;
          }
          return prev + 1;
        });
      }
    };

    if (isShowItemList) {
      document.removeEventListener('keydown', handleKeyPressed);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('keydown', handleKeyPressed);
    };
  }, [isShowItemList]);

  const handleBtnClk = () => {
    setIsShowItemList((prev) => !prev);
    const currentItemIndex = itemList.findIndex((item) => item.value === value);
    if (currentItemIndex >= 0) {
      setSelectedItemId(currentItemIndex);
    }
  };

  const handleItemClk = (value: string) => {
    if (dropdownMainBtnRef.current) {
      dropdownMainBtnRef.current.focus();
    }
    setIsShowItemList(false);
    onChange(value);
  };

  const getTitle = (): string => {
    const index = itemList.findIndex((item) => item.value === value);
    const title = itemList[index]?.title;
    if (index >= 0 && title) {
      return title;
    }
    return placeholder;
  };

  const title = getTitle();

  const handleKeyPressed = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setIsShowItemList(true);
      }
    },
    [setIsShowItemList],
  );

  return (
    <span ref={ref} className={'app-dropdown__wrap'}>
      <span className={'app-dropdown__button-wrap'}>
        <button
          type={'button'}
          onClick={handleBtnClk}
          ref={dropdownMainBtnRef}
          className={classNames(
            'app-dropdown__button',
            'app__font control-element',
            isShowArrow && 'is-show-arrow',
            isFocused && 'is-focused',
            title === placeholder && 'is-placeholder-text-style',
          )}
          onBlur={(e) => {
            onBlur(e);
            document.removeEventListener('keydown', handleKeyPressed);
            if (!isShowItemList) {
              setIsFocused(false);
            }
          }}
          onFocus={() => {
            document.addEventListener('keydown', handleKeyPressed);
            setIsFocused(true);
          }}
          name={name}
        >
          {title}
        </button>
      </span>
      {isShowItemList && (
        <span
          className={classNames(
            'app-dropdown__item-list-wrap',
            'app__font control-element',
          )}
        >
          {itemList.map((item, index) => (
            <button
              className={classNames(
                'app-dropdown__item',
                selectedItemId === index && 'is-selected',
                'app__font control-element',
              )}
              key={index}
              onClick={() => handleItemClk(item.value)}
            >
              {item.title}
            </button>
          ))}
        </span>
      )}
      {isShowArrow && (
        <img
          src={isFocused ? dropdownIconArrow : dropdownIconArrowDisable}
          alt="dropdownIconArrow"
          className={classNames(
            'app-dropdown__arrow-icon',
            isShowItemList && 'is-open',
          )}
          onClick={handleBtnClk}
        />
      )}
    </span>
  );
};
