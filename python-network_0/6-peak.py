#!/usr/bin/python3
"""Module that finds a peak in a list of unsorted integers."""


def find_peak(list_of_integers):
    """Find a peak in a list of unsorted integers using binary search.

    A peak is an element that is greater than or equal to its neighbors.
    Uses binary search to achieve O(log(n)) complexity.

    Args:
        list_of_integers (list): A list of integers.

    Returns:
        int or None: A peak element, or None if the list is empty.
    """
    if not list_of_integers:
        return None

    lst = list_of_integers
    n = len(lst)

    low = 0
    high = n - 1

    while low <= high:
        mid = (low + high) // 2

        # Check if mid is a peak
        left_ok = (mid == 0 or lst[mid] >= lst[mid - 1])
        right_ok = (mid == n - 1 or lst[mid] >= lst[mid + 1])

        if left_ok and right_ok:
            return lst[mid]
        elif mid > 0 and lst[mid - 1] > lst[mid]:
            # Peak is in the left half
            high = mid - 1
        else:
            # Peak is in the right half
            low = mid + 1

    return None
