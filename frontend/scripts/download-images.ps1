$images = @(
    @{url="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2560&q=85&fit=crop"; name="property-4.jpg"},
    @{url="https://images.unsplash.com/photo-1600566753376-12c8ab7a5fc6?w=2560&q=85&fit=crop"; name="property-5.jpg"},
    @{url="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=2560&q=85&fit=crop"; name="property-6.jpg"},
    @{url="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=2560&q=85&fit=crop"; name="property-7.jpg"},
    @{url="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2560&q=85&fit=crop"; name="property-8.jpg"},
    @{url="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2560&q=85&fit=crop"; name="property-9.jpg"},
    @{url="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=2560&q=85&fit=crop"; name="property-10.jpg"},
    @{url="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2560&q=85&fit=crop"; name="property-11.jpg"},
    @{url="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2560&q=85&fit=crop"; name="property-12.jpg"},
    @{url="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2560&q=85&fit=crop"; name="property-13.jpg"},
    @{url="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2560&q=85&fit=crop"; name="property-14.jpg"},
    @{url="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2560&q=85&fit=crop"; name="property-15.jpg"},
    @{url="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=2560&q=85&fit=crop"; name="property-16.jpg"},
    @{url="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=2560&q=85&fit=crop"; name="property-17.jpg"}
)

$folder = "c:\Users\ACER\Desktop\prime-estate\frontend\public\images\"
foreach ($img in $images) {
    $out = $folder + $img.name
    if (Test-Path $out) { Write-Host "SKIP $($img.name)" -ForegroundColor Yellow; continue }
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $out -UserAgent "Mozilla/5.0" -ErrorAction Stop
        Write-Host "OK $($img.name)" -ForegroundColor Green
    } catch {
        Write-Host "FAIL $($img.name): $_" -ForegroundColor Red
    }
}
