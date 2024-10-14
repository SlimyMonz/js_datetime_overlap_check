function dateTimeOverlap(startA, endA, startB, endB) {
    /*
      Logic: Instead of looking at the many cases where overlaps occur,
            we can check for the fewer cases where overlaps do not occur. 

      Cases: When a datetime range is before OR after the other range. 

      We are checking for dateTimeOverlap where overlap = true.
      The simple logic is for overlap = false, so we "!" to reverse the answer.
    */
    return !(
        // A no overlap before B
        (startA < startB && endA <= startB) ||
        // A no overlap after B
        (startA >= endB && endA > endB)
    );
}
