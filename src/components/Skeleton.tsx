import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
                className
            )}
        />
    );
}

interface ProductCardSkeletonProps {
    className?: string;
}

export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
    return (
        <div className={cn("bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", className)}>
            <Skeleton className="w-full h-48 rounded-lg mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <div className="flex items-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="w-5 h-5" />
                ))}
            </div>
            <Skeleton className="w-full h-10 rounded-lg" />
        </div>
    );
}

interface ProductGridSkeletonProps {
    count?: number;
    className?: string;
}

export function ProductGridSkeleton({ count = 4, className }: ProductGridSkeletonProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
            {[...Array(count)].map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}
